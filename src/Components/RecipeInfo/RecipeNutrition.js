import { useCallback, useEffect, useState } from "react";
import request from "../../request";

function RecipeNutrition({ id }) {
  const [widget, setWidget] = useState(null);

  const fetchData = useCallback(async () => {
    const data = await request(
      `recipes/${id}/nutritionLabel`,
      {
        id,
        defaultCss: true,
      },
      { "Content-Type": "text/html" }
    );

    setWidget(data);
  }, [id]);

  useEffect(() => {
    if (id) fetchData();
  }, [fetchData, id]);

  return (
    <div className="nutrition" dangerouslySetInnerHTML={{ __html: widget }} />
  );
}

export default RecipeNutrition;
