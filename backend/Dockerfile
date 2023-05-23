#Start with a lightweight Python image
FROM python:3.12.0a7-slim-bullseye

#create a directory called app, in which all of the files will go
WORKDIR /app

#This RUN command is necessary to install the packages for psycog2 (in the requirements file)
RUN apt-get update     && apt-get -y install libpq-dev gcc

#copy over the requirements.txt file 
COPY requirements.txt requirements.txt

#install everything listed in the requirements.txt file
RUN pip3 install -r requirements.txt

#copy over the rest of the files in your current directory into the working directory of your container (which we set as /app above)
COPY . .

#expose the default Python Flask port
EXPOSE 5000 

#run the python-api.py file
CMD ["python3", "python-api.py", "--host=0.0.0.0"]
