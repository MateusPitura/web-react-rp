import type { ReactNode } from "react";
import Photo from "../../../assets/photo.webp";

export default function Introduction(): ReactNode {
  return (
    <section className="flex flex-col gap-2 p-2">
      <div className="flex justify-center">
        <img
          src={Photo}
          alt="Doctor photo"
          className="rounded-lg shadow-md"
          width={360}
          height={640}
        />
      </div>
      <h2 className="text-light-primary text-display-medium">Clínico Geral</h2>
      <h1 className="text-light-on-surface text-display-large">
        RINALDO POSSAGNO
      </h1>
      <p className="text-body-large text-light-on-surface">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur qui
        tempora molestias suscipit saepe officiis esse animi iusto. Temporibus
        commodi sunt delectus amet, sit modi eligendi fugit id at maiores, nemo,
        rerum corrupti dolor suscipit quos sint minus. Cupiditate, voluptates
        sit consectetur nihil rem atque nulla. Nemo blanditiis explicabo vel.
      </p>
    </section>
  );
}
