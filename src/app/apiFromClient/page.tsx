"use client";

import { useEffect, useState } from "react";

export default function APITestPage() {
  const [name, setName] = useState<string>();
  useEffect(() => {
    fetch("/api/whoami")
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <div>
      <div>
        API Route From <span className="font-bold text-2xl">Client</span>
      </div>
      <div>Name : {name}</div>
    </div>
  );
}
