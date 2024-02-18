FROM python:latest

WORKDIR /backend

COPY .. .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install "uvicorn[standard]"


CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
