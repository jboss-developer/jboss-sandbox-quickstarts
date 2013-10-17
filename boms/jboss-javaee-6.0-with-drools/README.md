JBoss Java EE 6 with Drools Expert
===================================

This BOM builds on the Java EE full profile BOM, adding Drools.

_Note: This BOM experimental and it is not supported. It may contain non stable and experimental-features and its content and behaviour can be changed without any notice._
 
Usage
-----
 
To use the BOM, import into your dependency management:

    <dependencyManagement>
        <dependencies>
            <dependency>
               <groupId>org.jboss.bom.sandbox</groupId>
               <artifactId>jboss-javaee-6.0-with-drools</artifactId>
               <version>1.0.0-SNAPSHOT</version>
               <type>pom</scope>
               <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
