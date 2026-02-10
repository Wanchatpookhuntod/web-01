import telebot
import threading
import sys
import json
import os

# ไฟล์สำหรับเก็บข้อมูลรายชื่อ
DATA_FILE = "saved_chats.json"

def load_ids():
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except:
            return {}
    return {}

def save_chat_info(chat_id, name, chat_type):
    data = load_ids()
    str_id = str(chat_id)
    
    # ถ้ายังไม่มี หรือชื่อเปลี่ยน ให้บันทึกใหม่
    if str_id not in data or data[str_id].get('name') != name:
        data[str_id] = {
            "name": name,
            "type": chat_type
        }
        with open(DATA_FILE, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"💾 บันทึกข้อมูล: {name} ({chat_id})")

# 1. ตั้งค่า Token ของคุณ
TOKEN = "8597112185:AAEOa674LGvgM_vb0Qh2jy0SxPcYue5EJ2w"
bot = telebot.TeleBot(TOKEN)

# 2. ฟังก์ชันส่งจากคอมพิวเตอร์
def computer_sender():
    print("\n--- ระบบส่งข้อความจากคอมพิวเตอร์ ---")
    
    # Simple input loop
    while True:
        try:
            # แสดงรายการที่บันทึกไว้
            saved = load_ids()
            if saved:
                print("\n📋 รายชื่อที่บันทึกไว้:")
                for cid, info in saved.items():
                    print(f"   [{cid}] {info['name']} ({info['type']})")

            # Note: input() might block output visibility in some terminals slightly 
            # but works for basic scripts
            target_str = input("\nใส่ ID ปลายทาง (ดูจากรายการบน): ")
            if not target_str: 
                continue
                
            target_id = target_str 
            message_text = input("พิมพ์ข้อความ: ")
            
            if target_id and message_text:
                try:
                    bot.send_message(target_id, message_text)
                    print(f"✅ ส่งไปที่ ID {target_id} สำเร็จ!")
                except Exception as e:
                    print(f"❌ ส่งไม่สำเร็จ: {e}")
                    print("คำแนะนำ: หากส่งหา User เขาต้องเคยกด Start คุยกับบอทก่อนนะครับ")
        except EOFError:
            break
        except Exception as e:
            print(f"Error in sender thread: {e}")

# 3. ฟังก์ชันดักจับ ID (เวลามีคนพิมพ์ในกลุ่ม หรือทักบอทมา เลขจะโชว์)
# ปรับให้รับได้ทุกเเบบ (ข้อความ, รูป, สติ๊กเกอร์, คนเข้ากลุ่ม) เพื่อให้หา ID ง่ายขึ้น
@bot.message_handler(content_types=['text', 'photo', 'sticker', 'new_chat_members', 'left_chat_member', 'document'])
def monitor_chat(message):
    sender_name = message.from_user.first_name
    sender_id = message.from_user.id
    chat_id = message.chat.id
    chat_type = message.chat.type # 'private', 'group', 'supergroup', 'channel'
    chat_title = message.chat.title if message.chat.title else "Private Chat"
    
    print(f"\n📩 [มีการเคลื่อนไหว]")
    
    # บันทึกข้อมูล User/Group ลงไฟล์อัตโนมัติ
    save_chat_info(chat_id, chat_title, chat_type)
    if chat_type != 'private':
         # ถ้าเป็นกลุ่ม บันทึกคนส่งด้วย (เผื่ออยากทักส่วนตัว)
         save_chat_info(sender_id, sender_name, 'private_user')

    # กรณีบอทถูกดึงเข้ากลุ่ม
    if message.content_type == 'new_chat_members':
        for member in message.new_chat_members:
            if member.id == bot.get_me().id:
                print(f"🎉 บอทถูกดึงเข้ากลุ่ม: {chat_title}")
                print(f"🔑 Group ID คือ: {chat_id}")
                print("(เอาเลขนี้ไปใช้ส่งข้อความหากลุ่มได้เลย)")
                bot.send_message(chat_id, f"สวัสดีครับ! ID ของกลุ่มนี้คือ: {chat_id}")
                return

    print(f"จาก: {sender_name} (User ID: {sender_id})")
    print(f"ในช่องทาง: {chat_title} (Chat ID: {chat_id})")
    
    if message.text:
       print(f"ข้อความ: {message.text}")
    else:
       print(f"ประเภท: {message.content_type}")
    print("---------------------------------")

# เริ่มรันระบบ
if __name__ == "__main__":
    # เริ่ม Thread สำหรับส่งข้อความจากหน้าจอคอม
    sender_thread = threading.Thread(target=computer_sender, daemon=True)
    sender_thread.start()
    
    print("🤖 บอท ex_bot พร้อมทำงานแล้ว!")
    try:
        bot.infinity_polling()
    except KeyboardInterrupt:
        print("\nหยุดการทำงาน")
        sys.exit(0)
