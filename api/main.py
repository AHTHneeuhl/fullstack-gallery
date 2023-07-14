import os
from requests import get
from flask import Flask, request
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env.local")

unsplash_api_url = os.environ.get("UNSPLASH_API_URL", "")
unsplash_api_key = os.environ.get("UNSPLASH_API_KEY", "")
debug = os.environ.get("FLASK_DEBUG", True)

app = Flask(__name__)

app.config["DEBUG"] = debug


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {"Authorization": f"Client-ID {unsplash_api_key}", "Accept-Version": "v1"}
    params = {"query": word}

    res = get(f"{unsplash_api_url}/photos/random", headers=headers, params=params)
    return {"word": word, "data": res.json()}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5050)
