JBoss Sandbox BOMs
===================

This folder contains BOMs (Bill of materials) used to help the build of Quickstarts using experimental features.

_Note: These BOMs experimental and it is not supported. It contains non stable and experimental-features and its content and behaviour can be changed without any notice._
 
Usage
-----

To use the BOM, import into your dependency management:

    <dependencyManagement>
        <dependencies>
            <dependency>
               <groupId>org.jboss.bom.sandbox</groupId>
               <artifactId>jboss-javaee-6.0-with-all</artifactId>
               <version>1.0.0-SNAPSHOT</version>
               <type>pom</scope>
               <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
