# Start off with the official Postgres image
FROM postgres:13-alpine

# PosgreSQL expects you to have defined a POSTGRES_USER and a POSTGRES_PASSWORD. We are setting these up here. We are also defining the name of our database by setting POSTGRES_DB to mydb 
#Set the environment variables for PostgreSQL
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword
ENV POSTGRES_DB=mydb

# Expose the default PostgreSQL port
EXPOSE 5432

#Copy over the pertinent file for creating the database
COPY create_tables.sql docker-entrypoint-initdb.d/create_tables.sql

# Start the PostgreSQL service
CMD ["postgres"]
