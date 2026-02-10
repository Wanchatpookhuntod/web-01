import os
import json
from flask import Flask, request, jsonify, render_template, redirect, url_for
import requests
from dotenv import load_dotenv

# Load environment variables
dotenv_path = os.path.join(os.path.dirname(__file__), '.env')
if os.path.exists(dotenv_path):
    load_dotenv(dotenv_path)
else:
    load_dotenv() # Fallback

app = Flask(__name__)

# Basic configuration
TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
DATA_FILE = "saved_chats.json"

if not TOKEN:
    print("Error: TELEGRAM_BOT_TOKEN not found in .env file")
    
TELEGRAM_API_URL = f"https://api.telegram.org/bot{TOKEN}"

# --- Helper Functions for Data ---
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
    
    # Update if new or name changed
    if str_id not in data or data[str_id].get('name') != name:
        data[str_id] = {
            "name": name,
            "type": chat_type
        }
        try:
            with open(DATA_FILE, "w", encoding="utf-8") as f:
                json.dump(data, f, ensure_ascii=False, indent=4)
            print(f"Saved: {name} ({chat_id})")
        except Exception as e:
            print(f"Error saving data: {e}")

def send_telegram_message(chat_id, text):
    """Sends a message to Telegram API."""
    url = f"{TELEGRAM_API_URL}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text
    }
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
        return True, response.json()
    except Exception as e:
        print(f"Error sending message: {e}")
        return False, str(e)

# --- Routes ---

@app.route("/")
def index():
    chats = load_ids()
    # Check if a status message was passed via query params (simple way)
    msg = request.args.get('msg')
    msg_type = request.args.get('type', 'info')
    
    # Try to guess current webhook url for display (from ngrok/host header)
    if request.host_url.startswith("http"):
        webhook_url = f"{request.host_url}webhook"
    else:
        webhook_url = "/webhook"

    return render_template("index.html", chats=chats, message=msg, msg_type=msg_type, webhook_url=webhook_url)

@app.route("/send", methods=["POST"])
def send_msg():
    chat_id = request.form.get("chat_id")
    text = request.form.get("text")
    
    if not chat_id or not text:
        return redirect(url_for('index', msg="กรุณากรอกข้อมูลให้ครบ", type="danger"))
    
    success, result = send_telegram_message(chat_id, text)
    
    if success:
        return redirect(url_for('index', msg=f"ส่งข้อความสำเร็จไปยัง {chat_id}", type="success"))
    else:
        return redirect(url_for('index', msg=f"ส่งไม่สำเร็จ: {result}", type="danger"))

@app.route("/webhook", methods=["POST"])
def webhook():
    """Endpoint that Telegram calls to send updates."""
    data = request.json
    
    if not data:
        return jsonify({"status": "error", "message": "No data received"})

    # Check for message update
    if "message" in data:
        msg = data["message"]
        chat = msg.get("chat", {})
        chat_id = chat.get("id")
        chat_type = chat.get("type", "private")
        
        # Determine name
        name = "Unknown"
        if chat_type == "private":
            name = f"{msg.get('from', {}).get('first_name', '')} {msg.get('from', {}).get('last_name', '')}".strip()
        else: # group, supergroup, channel
            name = chat.get("title", "Group Chat")
            
        # Save ID automatically
        if chat_id:
            save_chat_info(chat_id, name, chat_type)
            
            # If it's a new member event (bot added to group)
            if "new_chat_members" in msg:
                for member in msg["new_chat_members"]:
                    # Check if bot itself was added (requires bot id check, but let's just greet)
                    # To be precise we should check if member['is_bot'] is True and it's us
                    pass
                # Auto-greeting logic could go here

        # Simple Auto-reply for text
        if "text" in msg:
            user_text = msg["text"]
            if user_text.strip() == "/start":
                send_telegram_message(chat_id, "สวัสดี! บันทึก ID เรียบร้อยแล้ว สามารถส่งข้อความหาฉันผ่านหน้าเว็บได้เลย")

    return jsonify({"status": "ok"})

if __name__ == "__main__":
    # Run the app locally
    app.run(debug=True, port=5000)
