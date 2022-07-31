---
title: Schema
description: Define the GraphQL schema that models the data you will query from your subgraph.
optional: false
tweet: "I just defined my subgraph schema on @graphprotocol with #30DaysofWeb3 @womenbuildweb3 👾"
---

This is where we will define the schema (schema.graphql) for our GraphQL queries. Ideally we want to model this data to match the data we need for our frontend.

**Based on our website mockups, we can see that we need to be able to:**

- search events by title, description
- filter events by date and/or date range
- fetch current user's hosted events by date (upcoming vs past)
- fetch current user's rsvp'd events by date (upcoming vs past)
- sort events by most number of rsvps
- sort events by date
- check if current user has rsvp'd to the event
- check if current user has attended the event
- fetch event details

We can delete the example entity in the schema file. Here is how our schema file should look:

```graphql
type Event @entity {
  id: ID!
  eventID: Bytes!
  name: String
  description: String
  link: String
  imageURL: String
  eventOwner: Bytes!
  eventTimestamp: BigInt!
  maxCapacity: BigInt!
  deposit: BigInt!
  paidOut: Boolean!
  totalRSVPs: BigInt!
  totalConfirmedAttendees: BigInt!
  rsvps: [RSVP!] @derivedFrom(field: "event")
  confirmedAttendees: [Confirmation!] @derivedFrom(field: "event")
}

type Account @entity {
  id: ID!
  totalRSVPs: BigInt!
  totalAttendedEvents: BigInt!
  rsvps: [RSVP!] @derivedFrom(field: "attendee")
  attendedEvents: [Confirmation!] @derivedFrom(field: "attendee")
}

type RSVP @entity {
  id: ID!
  attendee: Account!
  event: Event!
}

type Confirmation @entity {
  id: ID!
  attendee: Account!
  event: Event!
}
```

Let’s break down what is happening here.

We have 4 entities: `Event`, `Account`, `RSVP`, and `Confirmation`. Each entity must be defined with the `@entity` tag. You can think of an entity like an object. It’s a “thing” that has keys and values, with each key being a schema field that can be queried for its value.

Each entity also has an ID field for a unique id, and some fields for information about that entity that we want to be able to query. Each field has a type, and if it’s required it has a “!” (the value can’t be null). The event name, description, link, and imageURL fields are not required, which means that they can return a `null` value.

In the `Event` and `Account` entities for the rsvps and confirmedAttendees fields we are using a special keyword `@derivedFrom`, also called a reverse lookup, which allows us to reference data from another entity. Let’s look at the rsvps as an example:

```graphql
rsvps: [RSVP!] @derivedFrom(field: "event")
```

One way to think about what is happening here is that whenever someone creates a new RSVP, that RSVP instance gets added to this array if the event id from the “event” field in the RSVP entity matches the id for this Event. For example, a new RSVP gets created:

```graphql
RSVP {
  id: 20
  attendee: 300
  event: 5000
}
```

This RSVP is for an event with the id 5000. The Event with the matching id will have this RSVP added to the rsvps array.

```graphql
Event {
  id: 5000
  rsvps: [ {id: 20, attendee: 300, event: 5000} ]
}
```

Each new RSVP for this event will also get added here. Using reverse lookups like this, we are easily able to query all of the RSVPs and Confirmations for any Event or Account.

## Need Help? 
If you need help, check to see if your question has already been asked in **#section-5-help**. If you don't see it in there, post a question with any details that would make it easy for a team member to help you. We'll answer most frequently asked questions in live office hours, so keep an eye out in #announcements for those!

## Break Time
You've created the scaffold for your subgraph and defined your schema. You know the drill- document your journey by hitting the button below to tweet about it, paste your tweet in **#builders-hype** and hype up other tweets you see posted. 

**End of Day 7**

---

Writers: [Sarah Schwartz](https://twitter.com/schwartzswartz)
Editors: [Cami](https://twitter.com/camiinthisthang)
