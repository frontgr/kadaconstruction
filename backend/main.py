import json

from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse

from aiogram import types
from aiogram import Bot

from config import token, types, whitelist, emojis


app = FastAPI()
bot = Bot(token=token)


@app.post('/notification')
async def post_notification(request: Request):
    data = await request.body()
    data_dict = json.loads(data.decode())

    try:
        for user in whitelist:
            print(type(data_dict["textarea"]))
            await bot.send_message(
                text=f'Новая заявка 🔔 \n\n' 
                     f'{data_dict["name"]}\n' 
                     f'{data_dict["phone"]}\n'                 
                     f'<a href="https://wa.me/{data_dict["phone"]}">WhatsApp</a>: {emojis(data_dict["whatsapp"])}, '
                     f'<a href="https://t.me/{data_dict["phone"]}">Telegram</a>: {emojis(data_dict["telegram"])}, '
                     f'Viber: {emojis(data_dict["viber"])}\n\n'
                     f'Кол-во комнат: {data_dict["counts"]}\n'
                     f'Тип: {types[data_dict["types"]]}\n'
                     f'Площадь: {data_dict["area"]}м²\n\n'
                     f'Комментарий: \n{"Без комментария" if len(data_dict["textarea"]) == 0 else data_dict["textarea"]}',
                parse_mode='HTML',
                disable_web_page_preview=True,
                chat_id=user)
        return JSONResponse(content='The notification message was successfully created and sent',
                            status_code=status.HTTP_201_CREATED)
    except KeyError:
        return JSONResponse(content='Required field was skipped', status_code=status.HTTP_400_BAD_REQUEST)
