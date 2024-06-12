CREATE TABLE DamageReport (
    id SERIAL PRIMARY KEY,
    student_id INT,
    location_of_damage VARCHAR(255) NOT NULL,
    brief VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    upload_image VARCHAR(255),
    status VARCHAR(20) DEFAULT 'unattended',
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE ComplaintRequest (
    id SERIAL PRIMARY KEY,
    student_id INT,
    room_number VARCHAR(10),
    brief VARCHAR(255) NOT NULL,
    complaint TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'unattended',
    FOREIGN KEY (student_id) REFERENCES students(id)
);


CREATE TABLE LeaveRequest (
    id SERIAL PRIMARY KEY,
    student_id INT,
    room_number VARCHAR(10),
    subject VARCHAR(255) NOT NULL,
    body TEXT NOT NULL,
    upload_permission_letter VARCHAR(255),
    status VARCHAR(20) DEFAULT 'unattended',
    FOREIGN KEY (student_id) REFERENCES students(id)
);

CREATE TABLE LateArrival (
    id SERIAL PRIMARY KEY,
    student_id INT,
    room_number VARCHAR(10),
    subject VARCHAR(255) NOT NULL,
    reason TEXT NOT NULL,
    upload_permission_letter VARCHAR(255),
    status VARCHAR(20) DEFAULT 'unattended',
    FOREIGN KEY (student_id) REFERENCES students(id)
);



CREATE TABLE Staff (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL
);



CREATE TABLE StaffRequestsNew (
    request_id SERIAL PRIMARY KEY,
    student_id INT,
    category VARCHAR(20) NOT NULL,
    request_reference_id INT NOT NULL,
    status VARCHAR(20) DEFAULT 'unattended',
    FOREIGN KEY (student_id) REFERENCES student(id)
);


