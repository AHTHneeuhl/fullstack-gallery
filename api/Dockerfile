FROM python:3

# set working directory
WORKDIR /app

# expose port
EXPOSE 5050

# copy requirements file
COPY requirements.txt .
# install dependencies
RUN pip install -r requirements.txt

# copy other files
COPY . .
# run the command
CMD ["python", "main.py"]