import connectToServer from "@/config/database";
import Property from "@/model/properties";
export const GET = async (request) => {
  try {
    await connectToServer();
    const properties = await Property.find({});
    console.log("trazimo", properties);
    return new Response(JSON.stringify({ properties }), { status: 200 });
  } catch (err) {
    return new Response(err, { status: 500 });
  }
};
