import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Comments = () => {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError("Comment cannot be empty");
      return;
    }
    // Here you would typically send the comment to your API
    console.log("Submitting comment:", comment);
    setComment("");
    setError("");
  };

  // if (!isAuthenticated) {
  //   return (
  //     <div className="comments-section">
  //       <h4>Comments</h4>
  //       <p>Please log in to leave a comment.</p>
  //     </div>
  //   );
  // }

  return (
    <div className="comments-section">
      <h4>Leave a Comment</h4>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="comment">Your Comment</Label>
          <Input
            type="textarea"
            name="comment"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="comment-textarea"
          />
          {error && <div className="error">{error}</div>}
        </FormGroup>
        <Button color="primary" type="submit" className="comment-submit">
          Post Comment
        </Button>
      </Form>
    </div>
  );
};

export default Comments;
