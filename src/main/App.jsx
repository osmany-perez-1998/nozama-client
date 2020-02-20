import React, { useState } from "react";
import SignInForm from "../auth/SignInForm";
import Modal from "../utils/Modal";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen">
      {open && (
        <Modal onClose={() => setOpen(false)}>
          <SignInForm />
        </Modal>
      )}
    </div>
  );
}

export default App;
