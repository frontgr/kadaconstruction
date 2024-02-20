import os

token = os.environ['BOT_TOKEN']

types = {
    '0': 'Черновой',
    '1': 'Косметический',
    '2': 'Капитальный'
}

whitelist = [462248675, 6699340390, 866512502]  # id: K, I, M


def emojis(value: bool):
    if value:
        return "✅"
    else:
        return "❌"
