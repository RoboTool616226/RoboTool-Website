// const fs = require("fs");

// const filePath = "example.txt"; // Replace with your file path

const legRobot_box = {
  video_url: "https://www.youtube.com/embed/j6O_uePUKKI?si=X71EHLkOfAZwMfgL",
  code: "python\nimport numpy as np\n\n# Get the stick's position\nstick_position = get_position('stick')\n\n# Get the stick's size\nstick_size = get_size('stick')\n\n# Move the gripper close to the stick before grasping it\nmove_to_position(stick_position + np.array([0.0, 0.0, stick_size[2]/2 - 0.03]))\n\n# Grasp the stick\nclose_gripper()\n\n# Get the can's position\ncan_position = get_position('can')\n\n# Move the grasped stick to make contact with the can\nmove_to_position(can_position - np.array([stick_size[2]/2, 0.0, 0.0]))\n\n# Push the can closer to the strip of paper along the y-axis\nmove_to_position(stick_position + np.array([0.0, 0.23, 0.0]))\n\n# Release the stick\nopen_gripper()\n\n# Get the strip of paper's position\npaper_position = get_position('strip of paper')\n\n# Get the paper's size\npaper_size = get_size('strip of paper')\n\n# Move the gripper close to the strip of paper before grasping it\nmove_to_position(paper_position + np.array([0.0, 0.0, paper_size[2]/2 - 0.03]))\n\n# Grasp the strip of paper\nclose_gripper()\n\n# Drag the strip of paper in the negative x direction\nmove_to_position(np.array([0.0, paper_position[1], paper_position[2]]))\n\n# Release the strip of paper\nopen_gripper()\n\n# Get the can's position\ncan_position = get_position('can')\n\n# Get the can's size\ncan_size = get_size('can')\n\n# Move the gripper close to the can before grasping it\nmove_to_position(can_position + np.array([0.0, 0.0, can_size[2]/2 - 0.03]))\n\n# Grasp the can\nclose_gripper()",
};

const legRobot_surfboard = {
  video_url: "https://www.youtube.com/embed/uAIBhhfDK6c?si=2J8rPcKZEWgD0JPy",
  code: "Code for surfboard pushing task",
};

const legRobot_chair = {
  video_url: "https://www.youtube.com/embed/j6O_uePUKKI?si=X71EHLkOfAZwMfgL",
  code: "Code for chair pushing task",
};

const DEMO_CODES = {
  //   legRobot_box: legRobot_box,
  //   legRobot_surfboard: legRobot_surfboard,
  //   legRobot_chair: legRobot_chair,
  sequential: [legRobot_box, legRobot_box],
  creative: [legRobot_surfboard, legRobot_surfboard],
  manufacture: [legRobot_chair, legRobot_chair],
};

export default DEMO_CODES;
