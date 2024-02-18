import os

token = os.environ['BOT_TOKEN']

types = {
    '0': 'Черновой',
    '1': 'Косметический',
    '2': 'Капитальный'
}

whitelist = [462248675, 462248675]  # id


def emojis(value: bool):
    if value:
        return "✅"
    else:
        return "❌"
