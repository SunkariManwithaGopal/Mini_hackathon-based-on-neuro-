import express from 'express';

const router = express.Router();
const IQNorm = require('../models/tqNorms');

router.post('/validateRawScore', async (req, res) => {

  try {

    const { age, section, name, userRawScore } = req.body;
    
    const iqNorm = await IQNorm.findOne({ age, section, name });
    if (!iqNorm) {
      return res.status(404).json({ error: 'Norm data not found' });
    }

    // Sort mappings to find the maximum possible score
    const sortedMappings = iqNorm.mappings.sort((a, b) => b.raw_score - a.raw_score);
    const maxEntry = sortedMappings[0];

    // REQUIREMENT 6: Assign max TQ if raw score is higher than table
    if (userRawScore > maxEntry.raw_score) {
      return res.status(200).json({
        valid: true,
        message: 'Raw score exceeds maximum. Assigning highest TQ score.',
        tqScores: [maxEntry.tq_score]
      });
    }

    // Standard matching logic
    let matchedTQScores = iqNorm.mappings
      .filter(m => m.raw_score === userRawScore)
      .map(m => m.tq_score);

    if (matchedTQScores.length === 0) {
      return res.status(404).json({ valid: false, message: 'No matching score found.' });
    }

    return res.status(200).json({ valid: true, tqScores: matchedTQScores });


  } catch (err) {

    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
