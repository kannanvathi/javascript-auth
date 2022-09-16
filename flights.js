let flights = {
    "Segments": [
        {
            "Id": 1,
            "OriginStation": {
                "Id": 11235,
                "ParentId": 2343,
                "Code": "EDI",
                "Type": "Airport",
                "Name": "Edinburgh"
            },
            "DestinationStation": {
                "Id": 13771,
                "ParentId": 4698,
                "Code": "LTN",
                "Type": "Airport",
                "Name": "London Luton"
            },
            "DepartureDateTime": "2022-08-25T07:05:00",
            "ArrivalDateTime": "2022-08-25T08:20:00",
            "Carrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "OperatingCarrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "Duration": 75,
            "FlightNumber": "12",
            "JourneyMode": "Flight",
            "Directionality": "Outbound"
        },
        {
            "Id": 3,
            "OriginStation": {
                "Id": 13542,
                "ParentId": 4698,
                "Code": "LGW",
                "Type": "Airport",
                "Name": "London Gatwick"
            },
            "DestinationStation": {
                "Id": 9772,
                "ParentId": 782,
                "Code": "BCN",
                "Type": "Airport",
                "Name": "Barcelona"
            },
            "DepartureDateTime": "2022-08-25T16:05:00",
            "ArrivalDateTime": "2022-08-25T19:10:00",
            "Carrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "OperatingCarrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "Duration": 125,
            "FlightNumber": "8577",
            "JourneyMode": "Flight",
            "Directionality": "Outbound"
        },
        {
            "Id": 4,
            "OriginStation": {
                "Id": 9772,
                "ParentId": 782,
                "Code": "BCN",
                "Type": "Airport",
                "Name": "Barcelona"
            },
            "DestinationStation": {
                "Id": 13771,
                "ParentId": 4698,
                "Code": "LTN",
                "Type": "Airport",
                "Name": "London Luton"
            },
            "DepartureDateTime": "2015-02-12T11:30:00",
            "ArrivalDateTime": "2015-02-12T12:50:00",
            "Carrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "OperatingCarrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "Duration": 140,
            "FlightNumber": "2264",
            "JourneyMode": "Flight",
            "Directionality": "Inbound"
        },
        {
            "Id": 2,
            "OriginStation": {
                "Id": 13771,
                "ParentId": 4698,
                "Code": "LTN",
                "Type": "Airport",
                "Name": "London Luton"
            },
            "DestinationStation": {
                "Id": 11235,
                "ParentId": 2343,
                "Code": "EDI",
                "Type": "Airport",
                "Name": "Edinburgh"
            },
            "DepartureDateTime": "2015-02-12T20:00:00",
            "ArrivalDateTime": "2015-02-12T21:10:00",
            "Carrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "OperatingCarrier": {
                "Id": 1050,
                "Code": "U2",
                "Name": "easyJet",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
            },
            "Duration": 70,
            "FlightNumber": "19",
            "JourneyMode": "Flight",
            "Directionality": "Inbound"
        }
    ],
    "BookingOptions": [
        {
            "BookingItems": [
                {
                    "AgentID": 2363321,
                    "Status": "Current",
                    "Price": 78.98,
                    "Deeplink": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f3.0%2feasy%2fairli%2fair%2fUK%2cen%2cGBP%2f11235%2f13771%2f2015-02-05%2ffalse%2f2015-02-12%2f1%2c0%2c0%2fflights%2fflight%7cEZ%7c12%7c2015-02-05T07%3a05%7c2015-02-05T08%3a20%2cflight%7cEZ%7c19%7c2015-02-12T20%3a00%7c2015-02-12T21%3a10%3frequest_id%3d2203788f-6e34-4327-820c-64e5f1c6dd62%26channel%3ddataapi%26airline_id%3dEZ%26ticket_currency_id%3dGBP%26ticket_tax_px%3d78.98%26cabin_class%3deconomy%26q_dt%3d2015-01-29T15%3a29%26npt%3dtrue",
                    "SegmentIds": [
                        1,
                        2
                    ]
                },
                {
                    "AgentID": 2363321,
                    "Status": "Current",
                    "Price": 85.71,
                    "Deeplink": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=jzj5DawL5zJyT%2bnfeP9GJWfImnVvZd7vh0AJSObmdOp8YP07VbGmhzc%2bVTc80nUp&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f3.0%2feasy%2fairli%2fair%2fUK%2cen%2cGBP%2f4698%2f9772%2f2015-02-05%2ffalse%2f2015-02-12%2f1%2c0%2c0%2fflights%2fflight%7cEZ%7c8577%7c2015-02-05T16%3a05%7c2015-02-05T19%3a10%2cflight%7cEZ%7c2264%7c2015-02-12T11%3a30%7c2015-02-12T12%3a50%3frequest_id%3d2203788f-6e34-4327-820c-64e5f1c6dd62%26channel%3ddataapi%26airline_id%3dEZ%26ticket_currency_id%3dGBP%26ticket_tax_px%3d85.71%26cabin_class%3deconomy%26q_dt%3d2015-01-29T15%3a30%26npt%3dtrue",
                    "SegmentIds": [
                        3,
                        4
                    ]
                }
            ]
        }
    ],
    "Places": [
        {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
        },
        {
            "Id": 13542,
            "ParentId": 4698,
            "Code": "LGW",
            "Type": "Airport",
            "Name": "London Gatwick"
        },
        {
            "Id": 9772,
            "ParentId": 782,
            "Code": "BCN",
            "Type": "Airport",
            "Name": "Barcelona"
        },
        {
            "Id": 13771,
            "ParentId": 4698,
            "Code": "LTN",
            "Type": "Airport",
            "Name": "London Luton"
        },
        {
            "Id": 2343,
            "ParentId": 247,
            "Code": "EDI",
            "Type": "City",
            "Name": "Edinburgh"
        },
        {
            "Id": 4698,
            "ParentId": 247,
            "Code": "LON",
            "Type": "City",
            "Name": "London"
        },
        {
            "Id": 782,
            "ParentId": 200,
            "Code": "BCN",
            "Type": "City",
            "Name": "Barcelona"
        },
        {
            "Id": 247,
            "Code": "GB",
            "Type": "Country",
            "Name": "United Kingdom"
        },
        {
            "Id": 200,
            "Code": "ES",
            "Type": "Country",
            "Name": "Spain"
        }
    ],
    "Carriers": [
        {
            "Id": 1050,
            "Code": "U2",
            "Name": "easyJet",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png"
        }
    ],
    "Query": {
        "Country": "GB",
        "Currency": "GBP",
        "Locale": "en-GB",
        "Adults": 1,
        "Children": 0,
        "Infants": 0,
        "OriginPlace": "11235",
        "DestinationPlace": "782",
        "OutboundDate": "2022-08-25",
        "InboundDate": "2015-02-12",
        "LocationSchema": "Default",
        "CabinClass": "Economy"
    }
}