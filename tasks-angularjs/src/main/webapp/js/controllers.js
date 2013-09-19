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
function TasksCtrl($scope, $http, Tasks) {

    $scope.countCompleted = function(tasks) {
        $scope.completedTaskCount = 0;
        for (var i=0; i< tasks.length; i++) {
            if (tasks[i].complete == true) {
                $scope.completedTaskCount++;
            }
        }
        $scope.taskCount = tasks.length;
        if (window.console) {
            console.debug($scope.completedTaskCount + ' of ' + $scope.taskCount + ' tasks completed')
        }
    };
    
    // Define a refresh function, that updates the data from the REST service
    $scope.refresh = function() {
        $scope.tasks = Tasks.query(function(data) {
            $scope.countCompleted(data);
        });
    };
    
    // Define a redisplay function.
    $scope.redisplay = function() {
    };

    // Define a reset function, that clears the prototype newMember object, and
    // consequently, the form
    $scope.reset = function() {
        // clear input fields
        $scope.newTask = {};
    };

    // Define a submit function, which adds the task using the REST service,
    // and displays any error messages
    $scope.submit = function(task) {
        $scope.errors = {};
        clearEditFlags();
        Tasks.save(task, function(data) {

            // log a success message to the console
            if (window.console) console.info('Task Created: ' + task.title)

            // Update the list of tasks
            $scope.refresh();

            // Clear the form
            $scope.reset();
        }, function(result) {
            // log an error message to the console
            if (window.console) console.error('Response code' + result.status + ': ' + result.data);
        });

    };
    
    $scope.displayFilter = function(task) {
        if ($scope.display == 'active')
            return !task.complete;
        else if ($scope.display == 'complete')
            return task.complete;
        else
            return true;
    };
    
    $scope.markAllComplete = function(completed) {
        if (window.console) {
            if (completed) {
                console.info('All tasks marked complete');
            } else {
                console.info('All tasks marked incomplete');
            }
        }
        for (var i=0; i< $scope.tasks.length; i++) {
            _markComplete($scope.tasks[i], completed);
        }
        $scope.countCompleted($scope.tasks);
    };
    
    $scope.markComplete = function(task, completed) {
        _markComplete(task, completed);
        $scope.countCompleted($scope.tasks);
    };
    
    function _markComplete(task, completed) {
        task.complete = completed;
        Tasks.save(task, function(data) {
            // log a success message to the console
            if (window.console) {
                if (completed) {
                    console.info('Task marked complete on server: ' + task.title);
                } else {
                    console.info('Task marked incomplete on server: ' + task.title);
                }
            }
            
        }, function(result) {
            // log an error message to the console
            if (window.console) console.error('Response code' + result.status + ': ' + result.data);
        });
    };
    
    function clearEditFlags() {
        for (var i=0; i< $scope.tasks.length; i++) {
            delete $scope.tasks[i]['editing'];
        }
    };
    
    $scope.setEditFlag = function(task){
        clearEditFlags();
        task.editing=true;
    };
    
    $scope.display = 'all';

    // Call the refresh() function, to populate the list of tasks
    $scope.refresh();

    // Initialize newTask here to prevent Angular from sending a request
    // without a proper Content-Type.
    $scope.reset();

}