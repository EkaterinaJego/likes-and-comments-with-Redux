import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { commentUpdate, commentDelete } from "../../redux/actions";

function SingleComment({ data }) {
  const { text, id } = data;
  const dispatch = useDispatch();

  const [commentText, setCommentText] = useState("");

  const handleInput = (e) => {
    setCommentText(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  };

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  return (
    <form onSubmit={handleUpdate} className="comments-item">
      <div onClick={handleDelete} className="comments-item-delete">
        &times;
      </div>
      <input type="text" value={commentText} onChange={handleInput} />
      <input type="submit" hidden />
    </form>
  );
}
export default SingleComment;
