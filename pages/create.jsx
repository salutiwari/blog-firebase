import React, { useState } from "react";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { v4 as uuidv4, v4 } from "uuid";
import { db } from "./firebase/config";
import { useAuthContext } from "./Context/AuthContext";

const Create = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async () => {
    const id = v4();
    const res = await setDoc(doc(db, "blogs", id), {
      id,
      name,
      description,
      createdBy: user.uid,
      createAt: Timestamp.fromDate(new Date()),
    });

    return;
  };
  return (
    <>
      <form>
        <div>
          <label>Blog Name</label>
          <br />
          <input
            name="name"
            placeholder="Enter blog name"
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Blog Description</label>
          <br />
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter blog description"
          ></textarea>
        </div>
        <br />
        <div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Create;
