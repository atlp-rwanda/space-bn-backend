import model from '../database/models';

/**
 *
    {
        destination: [{name,arrivalTime,departureTime}],
    }
 */

// eslint-disable-next-line import/prefer-default-export
export const createTravelRequest = async (req, res) => {
  try {
    const TravelRequest = await model.TravelRequest.create({
      requesterId: req.userData.id
    });

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < req.body.destinations.length; i++) {
      const currentDestination = req.body.destinations[i];
      let accomodationId = null;
      if (currentDestination.accomodation) {
        const accomodation = await model.accomodation.create({
          hotelId: currentDestination.accomodation.hotelId,
          roomId: currentDestination.accomodation.roomId
        });
        accomodationId = accomodation.id;
      }
      await model.TrLocation.create({ ...currentDestination, TravelRequestId: TravelRequest.id, accomodationId });
    }
    const TravelRequests = await model.TravelRequest.findOne({
      where: { id: TravelRequest.id },
      include: [
        {
          model: model.TrLocation,
          as: 'destinations',
          include: [
            {
              model: model.accomodation,
              as: 'accomodation',
              include: [
                {
                  model: model.hotel,
                  as: 'Hotel',
                },
                {
                  model: model.RoomModel,
                  as: 'Room',
                },
              ]
            },
          ]
        },
      ]
    });
    res.status(201).json({
      TravelRequests
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTravelRequest = async (req, res) => {
  const TravelRequests = await model.TravelRequest.findAll(
    {
      include: [
        {
          model: model.TrLocation,
          as: 'destinations',
          include: [
            {
              model: model.accomodation,
              as: 'accomodation',
              include: [
                {
                  model: model.hotel,
                  as: 'Hotel',
                },
                {
                  model: model.RoomModel,
                  as: 'Room',
                },
              ]
            },
          ]
        },
      ]
    }
  );

  res.status(200).json({
    TravelRequests
  });
};
