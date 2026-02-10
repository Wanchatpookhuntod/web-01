# Flask Telegram Bot Code

ตัวอย่างโค้ดสำหรับสร้าง Telegram Bot ด้วย Python และ Flask

## การติดตั้งและตั้งค่า (Installation)

1. **ติดตั้ง Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

2. **รับ Token จาก BotFather**:
   - เปิด Telegram ค้นหา `@BotFather`
   - พิมพ์ `/newbot` และทำตามขั้นตอนเพื่อสร้างบอทใหม่
   - คุณจะได้ **API Token** มา (เช่น `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

3. **ตั้งค่า Environment Variable**:
   - เปิดไฟล์ [d:\python\demo_notif\.env](.env)
   - แทนที่ `place_your_token_here` ด้วย Token ที่ได้มาจาก BotFather
   ```text
   TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
   ```

## การรันโปรแกรม (Running)

1. รันไฟล์ `app.py`:
   ```bash
   python app.py
   ```
   โปรแกรมจะทำงานที่ `http://127.0.0.1:5000`

## การเชื่อมต่อกับ Telegram (Webhook Setup with ngrok)
เนื่องจาก Telegram ส่ง Webhook จากอินเทอร์เน็ตเข้ามาที่เครื่องเราโดยตรงไม่ได้ (ถ้ายังไม่ได้ deploy ขึ้น server จริง) เราต้องใช้เครื่องมืออย่าง **ngrok** เพื่อสร้าง public URL

1. ดาวน์โหลด [ngrok](https://ngrok.com/download)
2. รัน ngrok เพื่อ forward port 5000:
   ```bash
   ngrok http 5000
   ```
3. Copy URL ที่เป็น `https` (เช่น `https://xyz123.ngrok.io`)
4. ตั้งค่า Webhook ให้ Telegram รู้จัก URL ของเรา โดยเปิด browser แล้วเข้าลิงค์นี้:
   ```
   https://api.telegram.org/bot<YOUR_TOKEN>/setWebhook?url=<YOUR_NGROK_HTTPS_URL>/webhook
   ```
   *แทนค่า `<YOUR_TOKEN>` และ `<YOUR_NGROK_HTTPS_URL>` ให้ถูกต้อง*

5. ทดสอบส่งข้อความหาบอทของคุณใน Telegram!
