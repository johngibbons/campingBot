import mongoose from 'mongoose';

const AlertSchema = new mongoose.Schema(
  {
    campgrounds: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Campgrounds',
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',
      required: true
    },
    dates: {
      type: [{}],
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isSendingEmails: {
      type: Boolean,
      default: false
    },
    emailAddresses: [String],
    lastCheckedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

export default mongoose.model('Alerts', AlertSchema);
