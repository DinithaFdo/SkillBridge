
springboot_project = {
    "src/main/java/com/example/skillshare": {
        "SkillShareApplication.java": '''package com.example.skillshare;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SkillShareApplication {
    public static void main(String[] args) {
        SpringApplication.run(SkillShareApplication.class, args);
    }
}
'''
    },
    "src/main/resources": {
        "application.properties": '''# Application config
server.port=8080
'''
    },
    "": {
        "pom.xml": '''<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.example</groupId>
    <artifactId>skillshare</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>

    <name>SkillShare</name>
    <description>Skill Sharing Platform - Spring Boot</description>

    <properties>
        <java.version>17</java.version>
        <spring.boot.version>3.1.0</spring.boot.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
'''
    }
}

# Append files to existing fake Spring Boot project
full_path = "/mnt/data/springboot_fake_code"

for folder, files in springboot_project.items():
    folder_path = os.path.join(full_path, folder)
    os.makedirs(folder_path, exist_ok=True)
    for filename, content in files.items():
        with open(os.path.join(folder_path, filename), "w") as f:
            f.write(content)

full_path
