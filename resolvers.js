/*
Resolvers are simple functions which are assigned to the queries we have defined or to mutations, 
and these functions contain the logic which is needed to retrieve of manipulate data in the backend
when a certain graphQL query is made from the client
*/

var courseData = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        author: 'Learn Node JS!',
        topic: 'Programming',
        url:' https://nodejs.org/en/'
    },
    {
        id: 2,
        title: 'NodeJS, Express, MongoDB Dev to Deployment',
        author: 'Brad Traversy',
        description: ' Learn by building',
        topic: 'Programming',
        url: 'https://www.google.ca'
    },
    {
        id: 3,
        title: 'BCIT COMP 2913',
        author: 'Daniel T',
        description: 'ReactJS',
        topic: 'Programming',
        url: 'https://www.bcit.ca/study/courses/comp2913'
    }
];

const resolvers = {
    Query: {
        allCourses: () => { return courseData },
        course: (root, {id}) => {
            return courseData.filter(course => course.id === id)[0]; //First element as it returns array
        } 
    }
}

export default resolvers;

