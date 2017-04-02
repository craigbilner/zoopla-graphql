# Zoopla graphql

GraphQL layer over Zoopla's and Google's Maps APIs

## What it does

Easily search the Zoopla database for property listings, and only
pick out the bits you're interested in for your interface. On top
of that you can find the walking distance to a station within the
vicinity, AND THEN how long it will take to commute from those said
stations to a destination of your choice 🚶‍️🏡🚂😊

## Examples

Example query:
```graphql
{
  listings(area: "walthamstow", status:SALE) {
    count
    properties {
      agent {
        name
      }
      price {
        current,
        history {
          date
          percent
        }
      }
      location {
        transport {
          trainStations(maxWalkTime:10) {
            name
            gettingThere {
              walking {
                time {
                  minutes
                }
              }
            }
            commuteTo(destination:"london bridge") {
              time {
                minutes
              }
            }
          }
        }
      }
    }
  }
}
```

Example response:

```json
{
  "data": {
    "listings": {
      "count": 467,
      "properties": [
        {
          "agent": {
            "name": "Estates 17 Ltd"
          },
          "price": {
            "current": 1500000,
            "history": [
              {
                "date": "2017-02-18T14:39:33.000Z",
                "percent": 0
              }
            ]
          },
          "location": {
            "transport": {
              "trainStations": [
                {
                  "name": "Walthamstow Central",
                  "gettingThere": {
                    "walking": {
                      "time": {
                        "minutes": 7
                      }
                    }
                  },
                  "commuteTo": {
                    "time": {
                      "minutes": 28
                    }
                  }
                }
              ]
            }
          }
        },
        {
          "agent": {
            "name": "Kings Group - Walthamstow"
          },
          "price": {
            "current": 1250000,
            "history": [
              {
                "date": "2017-01-10T15:24:57.000Z",
                "percent": 0
              },
              {
                "date": "2017-03-20T18:57:53.000Z",
                "percent": -10.7
              }
            ]
          },
          "location": {
            "transport": {
              "trainStations": [
                {
                  "name": "Wood Street",
                  "gettingThere": {
                    "walking": {
                      "time": {
                        "minutes": 8
                      }
                    }
                  },
                  "commuteTo": {
                    "time": {
                      "minutes": 39
                    }
                  }
                }
              ]
            }
          }
        },
      ]
    }
  }
}
```

## To develop

* `yarn install`
* start your redis instance (I use Kitematic and a docker container)
* `npm start` with the various environment variables detailed below
* navigate to *localhost:8080/graphql*
* type some graphql stuff

### Environment variables

* `NODE_ENV` - set to `development` for the graphiql interface
* `ZOOPLA_API_KEY` - your zoopla API key
* `GM_NS_API_KEY` - your google maps nearby search API key
* `GM_DM_API_KEY` - your google maps distance matrix API key
* `GM_D_API_KEY` - your google maps directions API key
* `REDIS_PORT` - your redis port
* `REDIS_HOST` - your redis host
