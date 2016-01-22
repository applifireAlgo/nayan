

ALTER TABLE `ast_Employee_T` ADD CONSTRAINT FOREIGN KEY (`contactId`) REFERENCES `ast_CoreContacts_T`(`contactId`);



ALTER TABLE `ast_Employee_T` ADD CONSTRAINT FOREIGN KEY (`dept`) REFERENCES `ast_Dept_M`(`deptId`);

