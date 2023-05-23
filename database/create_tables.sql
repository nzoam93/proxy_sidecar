CREATE TABLE IF NOT EXISTS questions (
    id INT PRIMARY KEY, 
    question VARCHAR,
    answerA VARCHAR NOT NULL,
    answerB VARCHAR NOT NULL,
    answerC VARCHAR NOT NULL,
    answerD VARCHAR NOT NULL,
    correctAnswer VARCHAR NOT NULL
);

INSERT INTO questions(id, question, answerA, answerB, answerC, answerD, correctAnswer)
VALUES
    (1, 'What is the current year?', '2020', '2023', '2024', '2025', '2023'),
    (2, 'Who is the current president?', 'Bush', 'Obama', 'Trump', 'Biden', 'Biden'),
    (3, 'Which is the largest state?', 'Texas', 'Michigan', 'Califorinia', 'Alaska', 'Alaska'),
    (4, 'Which animal has the highest blood pressure?', 'Giraffe', 'Lion', 'Cheetah', 'Elephant', 'Giraffe'),
    (5, 'Which country produces the most coffee?', 'Denmark', 'Brazil', 'Colombia', 'Venezuela', 'Brazil');
