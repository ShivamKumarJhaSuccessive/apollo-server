What is GraphQL?
>> GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.
>> GraphQL can optimize RESTful API calls.
>> It gives a declarative way of fetching and updating your data.


Difference between GraphQL and Rest?
>> GraphQL architecture is client-driven and Rest is server-driven.
>> GraphQL organized in terms of schema and type system and Rest is endpoints.
>> GraphQL data fetching specific data with a single API call and Rest fixed data with multiple API calls. GraphQL community is growing and Rest are Large.


Write down about Schema and Resolvers?
>> The GraphQL schema is at the center of every GraphQL server. It defines the server's API, allowing clients to know which operations can be performed by the server. The schema is written using the GraphQL schema language (also called schema definition language, SDL). With it, you can define object types and fields to represent data that can be retrieved from the API as well as root types that define the group of operations that the API allows.

>> Resolver is a collection of functions that generate response for a GraphQL query. In simple terms, a resolver acts as a GraphQL query handler.
>> implementing Resolvers:-
Our API is able to run two query operations: one to retrieve an array of books and another to retrieve a book based on its id. The next step for us is to define how these queries get resolved so that the right fields are returned to the client.

The way to do this is by defining a resolver function for every field in the schema. Remember that I mentioned that GraphQL has an execution algorithm? The implementation of this execution algorithm is what transforms the query 

