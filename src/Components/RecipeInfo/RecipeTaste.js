import { useCallback, useEffect, useState } from "react";
import request from "../../request";

function RecipeTaste({ id }) {
  const [widget, setWidget] = useState(null);

  const fetchData = useCallback(async () => {
    const data = await request(
      `recipes/${id}/nutritionWidget`,
      {
        id,
        defaultCss: true,
      },
      { "Content-Type": "text/html" }
    );
    console.log(data);
    setWidget(data);
  }, [id]);

  useEffect(() => {
    if (id) fetchData();
  }, [fetchData, id]);

  return <div className="taste" dangerouslySetInnerHTML={{ __html: widget }} />;
}

export default RecipeTaste;
