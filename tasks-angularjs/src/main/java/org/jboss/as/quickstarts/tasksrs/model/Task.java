/*
 * JBoss, Home of Professional Open Source
 * Copyright 2013, Red Hat, Inc. and/or its affiliates, and individual
 * contributors by the @authors tag. See the copyright.txt in the
 * distribution for a full listing of individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.as.quickstarts.tasksrs.model;

// JSON: uncomment to include json support (note json is not part of the JAX-RS standard)
//import org.codehaus.jackson.annotate.JsonIgnore;

import static javax.persistence.GenerationType.IDENTITY;

import java.io.Serializable;
import java.io.StringReader;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.xml.bind.JAXB;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 * User's task entity which is marked up with JPA annotations and JAXB for serializing XML
 * (and JSON if required)
 *
 * @author Oliver Kiss and others
 */
@SuppressWarnings("serial")
@Entity
@XmlRootElement(name = "task")
public class Task implements Serializable {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    //@ManyToOne
    //@XmlTransient
    //private User owner;

    private String title;
    
    private boolean complete; 

    public Task() {
    }

    public Task(String title) {
        super();
        this.title = title;
    }

    @XmlAttribute
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @XmlElement
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    
    public boolean isComplete() {
        return complete;
    }
    
    public void setComplete(boolean complete) {
        this.complete = complete;
    }
}
