FROM maven:3.8.6-eclipse-temurin-17-alpine as builder
WORKDIR /app
COPY . .
RUN mvn package -DskipTests

FROM maven:3.8.6-eclipse-temurin-17-alpine
WORKDIR /app
COPY --from=builder /app/target/*.jar /app/app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]