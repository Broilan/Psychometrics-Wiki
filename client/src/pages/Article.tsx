import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/article.css"; 
import axios from 'axios';

type ArticleData = {
  id: number;
  title: string;
  content: string;
};

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');

  // Fetch article data
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`/api/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  // Open edit form with existing content
  const handleEdit = () => {
    if (article) {
      setEditContent(article.content);
      setIsEditing(true);
    }
  };

  // Handle content submission
  const handleSubmit = async () => {
    try {
      await axios.put(`/api/articles/${id}`, { content: editContent });
      setArticle((prev) => (prev ? { ...prev, content: editContent } : null));
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  return (
    <div className="article-page">
      {article ? (
        <>
          <h1>{article.title}</h1>
          <div className="article-content">{article.content}</div>
          <button onClick={handleEdit}>Edit</button>

          {isEditing && (
            <div className="edit-modal">
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <button onClick={handleSubmit}>Save Changes</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Article;
