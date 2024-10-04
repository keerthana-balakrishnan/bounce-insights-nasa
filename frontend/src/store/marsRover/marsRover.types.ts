type Camera = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
};

type Rover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
  max_sol: number;
  max_date: string;
  total_photos: number;
  cameras: {
    name: string;
    full_name: string;
  }[];
};

type MarsRoverPhoto = {
  id: number;
  sol: number;
  camera: Camera;
  img_src: string;
  earth_date: string;
  rover: Rover;
};

type MarsRoverResponse = {
  photos: MarsRoverPhoto[];
};

type MarsRoverRequest = {
  name: string;
  date: string;
};

export type {
  MarsRoverResponse,
  Camera,
  Rover,
  MarsRoverRequest,
  MarsRoverPhoto,
};
