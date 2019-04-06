import mongoose from 'mongoose';

const CampgroundSchema = new mongoose.Schema(
  {
    agencyIcon: {
      type: String
    },
    agencyName: {
      type: String
    },
    contractCode: {
      type: String
    },
    contractType: {
      type: String
    },
    facilityCategory: {
      type: String
    },
    facilityId: {
      type: String
    },
    facilityName: {
      type: String
    },
    facilityPhoto: {
      type: String
    },
    latitude: {
      type: String
    },
    longitude: {
      type: String
    },
    placeId: {
      type: Number
    },
    placeName: {
      type: String
    },
    placeUrl: {
      type: String
    },
    placeDescription: {
      type: String
    },
    placePhoto: {
      type: String
    },
    regionName: {
      type: String
    },
    reservationAgency: {
      type: String
    },
    shortName: {
      type: String
    },
    state: {
      type: String
    },
    url: {
      type: String
    },
    availabilities: [{}],
    lastCheckedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

CampgroundSchema.index({ facilityName: 'text' });

export default mongoose.model('Campgrounds', CampgroundSchema);
