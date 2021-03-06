# Event managed state

While the prime focus for an event-driven architecture is processing events, in certain cases you need to persist events for post processing and queries by other applications. The event backbone has a built-in event log that can be used to store and reply to events that are published to the backbone. However, considering the full scope of event-driven solutions, other use cases and types of store can be supported:

* Event stores optimized for analytics.
* Event sourcing as a pattern for recording state changes and updates across distributed systems.
* Command Query Response Separation (CQRS) as an optimization that separates updates and reads across different stores.


## Event sourcing

When the state of a system changes, an application issues a notification event of the state change. We are detailing this pattern [here >>](../design-patterns/event-sourcing.md) 

## Command Query Responsibility Segregation (CQRS)

The event log leads to more work to support business query as it requires converting the events into the application state suitable to the query.

We are detailing this pattern [here >>](../design-patterns/cqrs.md) 

See the following [order management project](https://github.com/ibm-cloud-architecture/refarch-kc-order-ms) for a detail explanation and implementation of the CQRS and event sourcing patterns.

## Event sourcing, CQRS and microservices

With the adoption of microservices you have explicitly separated state, so that a microservice is bounded with its own state. Further, with the use of event sourcing, you create a history log that is not easy to query. The challenge now comes when you need to implement a query that requires a joining of data from multiple services.
There are multiple choices to address service orchestration: API composition or the CQRS pattern. For API composition the query is supported by an operation which integrate with all other microservices and may do some data transformation to combine the results. With this pattern you need to assess for aggregation requirements as they may dramatically impact performance. You may need to assess where to put this API composition component. It can be an API gateway or part of a BFF or even its own microservices.
The other answer is to implement a CQRS pattern where state changes are published as events by multiple related business objects. Each change is persisted in the event log or event store, and a higher level operation subscribes to each event and persists the data in a queryable data store.

## Fearther readings

Read more on this pattern at https://microservices.io/patterns/data/cqrs.html and our [reference implementation](https://github.com/ibm-cloud-architecture/refarch-kc-order-ms)

## Supporting Products

* [IBM Event Streams Public Cloud](https://console.bluemix.net/catalog/services/event-streams)
* [IBM Event Streams Private Cloud](https://www.ibm.com/cloud/event-streams)
* [IBM Db2 Event store](https://www.ibm.com/products/db2-event-store)
