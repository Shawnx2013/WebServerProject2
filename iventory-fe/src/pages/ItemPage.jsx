import NavTopBar from "../components/NavTopBar";

function ItemPage({ stock, description }) {
  return (
    <div>
      <div>
        <NavTopBar name={"Item page"} />
      </div>
      <div>
        <div>
          <p className="ml-[5rem]">Avaliable</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet
            consectetur adipiscing elit. Nam libero justo laoreet sit amet
            cursus sit. Libero enim sed faucibus turpis in eu mi. Nulla facilisi
            cras fermentum odio eu feugiat. Facilisis magna etiam tempor orci
            eu. In nisl nisi scelerisque eu ultrices vitae auctor eu augue.
            Platea dictumst vestibulum rhoncus est pellentesque. Lacus
            suspendisse faucibus interdum posuere lorem ipsum dolor sit.
            Venenatis lectus magna fringilla urna porttitor rhoncus. Sit amet
            consectetur adipiscing elit. Aliquam vestibulum morbi blandit cursus
            risus at ultrices mi. Ut eu sem integer vitae justo eget.
          </p>
        </div>

        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-4"
          // onClick={() => loginWithRedirect()}
        >
          Edit
        </button>
        <button
          className=" bg-orange-500 w-1/4 h-10 rounded-md mt-4"
          // onClick={() => loginWithRedirect()}
        >
          View
        </button>
      </div>
    </div>
  );
}

export default ItemPage;
