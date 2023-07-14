from requests import get
from flask import Flask, request

UNSPLASH_URL = "https://api.unsplash.com"
UNSPLASH_KEY = ""

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {"Authorization": f"Client-ID {UNSPLASH_KEY}", "Accept-Version": "v1"}
    params = {"query": word}

    res = get(f"{UNSPLASH_URL}/photos/random", headers=headers, params=params)
    return {"word": word, "data": res.json()}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
