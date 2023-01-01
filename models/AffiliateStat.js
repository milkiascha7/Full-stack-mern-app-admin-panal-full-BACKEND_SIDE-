import mongoose from 'mongoose';

const AffiliateStatSchema = new mongoose.Schema(
  {
    // one to one relation types
    userId: { type: mongoose.Types.ObjectId, ref: 'User' },
    // one to many relationship
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: 'Transaction',
    },
  },
  {
    timestamps: true,
  }
);

const AffiliateStat = mongoose.model('AffiliateStat', AffiliateStatSchema);
export default AffiliateStat;
