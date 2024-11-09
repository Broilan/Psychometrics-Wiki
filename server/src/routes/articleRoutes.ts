import express from 'express';
import articles from '../data/articles';

const router = express.Router();

// Get an article by ID
router.get('/:id', (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));
  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
});

// Update an article's content
router.put('/:id', (req, res) => {
  const article = articles.find((a) => a.id === parseInt(req.params.id));
  if (article) {
    article.content = req.body.content;
    res.json(article);
  } else {
    res.status(404).json({ error: 'Article not found' });
  }
});

export default router;

