import mongoose from 'mongoose';

const productsReviewsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProductReviews = mongoose.model('ProductReviews', productsReviewsSchema);

export { ProductReviews };
