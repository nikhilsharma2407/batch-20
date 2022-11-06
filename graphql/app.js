const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLSchema, GraphQLNonNull } = require('graphql');

const app = express();

const friendsData = [
    {
        "id": "60d0fe4f5311236168a109cc",
        "title": "ms",
        "firstName": "Adina",
        "lastName": "Barbosa",
        "picture": "https://randomuser.me/api/portraits/med/women/28.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cd",
        "title": "mr",
        "firstName": "Roberto",
        "lastName": "Vega",
        "picture": "https://randomuser.me/api/portraits/med/men/25.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cc",
        "title": "mr",
        "firstName": "Rudi",
        "lastName": "Droste 2",
        "picture": "https://randomuser.me/api/portraits/med/men/83.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109cf",
        "title": "mrs",
        "firstName": "Carolina",
        "lastName": "Lima",
        "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d0",
        "title": "mr",
        "firstName": "Emre 1",
        "lastName": "Asikoglu",
        "picture": "https://randomuser.me/api/portraits/med/men/23.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d3",
        "title": "mr",
        "firstName": "Friedrich-Karl",
        "lastName": "Brand",
        "picture": "https://randomuser.me/api/portraits/med/men/7.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d4",
        "title": "mr",
        "firstName": "Valentin",
        "lastName": "Ortega",
        "picture": "https://randomuser.me/api/portraits/med/men/3.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d6",
        "title": "mrs",
        "firstName": "Elisa",
        "lastName": "Lorenzo",
        "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d8",
        "title": "mrs",
        "firstName": "Karoline",
        "lastName": "Sviggum",
        "picture": "https://randomuser.me/api/portraits/med/women/61.jpg"
    },
    {
        "id": "60d0fe4f5311236168a109d9",
        "title": "ms",
        "firstName": "Nuria",
        "lastName": "Leon",
        "picture": "https://randomuser.me/api/portraits/med/women/93.jpg"
    }
];

const usersData = [
    { name: "Nikhil", username: "nikhil101", friendList: ["60d0fe4f5311236168a109cc", "60d0fe4f5311236168a109cf"] },
    { name: "test", username: "test", friendList: ["60d0fe4f5311236168a109cc", "60d0fe4f5311236168a109cf"] }
];

const FriendType = new GraphQLObjectType({
    name: "Friend",
    description: "This is the Friend Object",
    fields: () => {
        return {
            id: { type: GraphQLString },
            title: { type: GraphQLString },
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            picture: { type: GraphQLString },
            fullName: {
                type: GraphQLString,
                resolve: ({ title, firstName, lastName }) => `${title} ${firstName} ${lastName}`
            }
        }
    }
})

const UserType = new GraphQLObjectType({
    name: "User",
    description: "This is the User Object",
    fields: () => ({
        name: { type: GraphQLString },
        username: { type: GraphQLString },
        friendList: { type: GraphQLList(GraphQLString) },
        friends: {
            type: GraphQLList(FriendType),
            resolve: (user) => {
                return user.friendList.map(id => friendsData.find(friend => friend.id === id))
            }
        }
    })
})

const Query = new GraphQLObjectType({
    name: "Query",
    description: "This is the Query Object",
    fields: () => ({
        friends: {
            type: GraphQLList(FriendType),
            resolve: () => friendsData
        },
        users: {
            type: GraphQLList(UserType),
            resolve: () => usersData
        },
        user: {
            type: UserType,
            args: {
                username: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (user, args) => usersData.find(e => e.username === args.username)
        },
        friend: {
            type: GraphQLList(FriendType),
            args: {
                name: { type: GraphQLNonNull(GraphQLString) }
            },
            resolve: (friend, args) => {
                console.log(args);
                const data = friendsData.filter(e => e.firstName.includes(args.name))
                console.log(data);
                return data
            }
        }
    })
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    description: "This is the Mutation Object",
    fields: () => ({
        createUser: {
            type: UserType,
            description: "Add a new user",
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                username: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve:(userObj,{name,username})=>{
                const user = {name,username,friendList:[]};
                usersData.push(user);
                return user;
            }
        },
        addFriend: {
            type: FriendType,
            description: "Add a new friend",
            args: {
                username: { type: GraphQLNonNull(GraphQLString) },
                id:{ type: GraphQLNonNull(GraphQLString) }
            },
            resolve:(userData,{username,id})=>{
                // get the user
                const user = usersData.find(e=>e.username===username);
                user.friendList.push(id);
                const friend = friendsData.find(friend=>friend.id===id);
                return friend;
            }
        }
    })
});

const Schema = new GraphQLSchema({
    query: Query,
    mutation:Mutation
})

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));
const port = 5000;
app.listen(port, () => { console.clear(); console.log(`GraphQL server is started on port ${port}`) })

// decalare the types
// Declare the root query
// Declare the mutations
// Declare the schema