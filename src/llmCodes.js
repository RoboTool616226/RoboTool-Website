// const fs = require("fs");

// const filePath = "example.txt"; // Replace with your file path
import armHammerCode from "./texts/arm_code_hammer.txt";
import armMagnetCode from "./texts/arm_code_magnet.txt";
import armScrollCode from "./texts/arm_code_scroll.txt";
import robotBoxCode from "./texts/legRobot_code_box.txt";
import robotSurfboardCode from "./texts/legRobot_code_surfboard.txt";
import robotLeverCode from "./texts/legRobot_code_lever.txt";
// import robotBox from "./texts/"

const legRobot_box = {
  video_url: "https://www.youtube.com/embed/eiTB0ojxetM?si=JZCZHkohT6iHgF1-",
  // code: "import numpy as np\n\n# Get the position and size of box_1\nbox_1_position, _ = get_position('box_1')\nbox_1_size = get_size('box_1')\n\n# Get the position and size of box_2\nbox_2_position, _ = get_position('box_2')\nbox_2_size = get_size('box_2')\n\n# Calculate the target position for box_2\ntarget_box_2_position = [box_1_position[0] - box_1_size[0]/2 - box_2_size[0]/2 - 0.01, box_1_position[1], box_1_position[2]]\n\n# Push box_2 to the target position\npush_to_position('box_2', target_box_2_position)\n\n# Get the updated position of box_2\nbox_2_position, _ = get_position('box_2')\n\n# Get the size of the robot\nrobot_size = get_size('robot')\n\n# Calculate the target position for the robot to climb onto box_2\ntarget_robot_position = [box_2_position[0], box_2_position[1], box_2_size[2]+robot_size[2]/2]\n\n# Climb onto box_2\nclimb_to_position(target_robot_position)\n\n# Get the updated position and size of box_1\nbox_1_position, _ = get_position('box_1')\nbox_1_size = get_size('box_1')\n\n# Calculate the target position for the robot to climb onto box_1\ntarget_robot_position = [box_1_position[0], box_1_position[1], box_1_size[2]+robot_size[2]/2]\n\n# Climb onto box_1\nclimb_to_position(target_robot_position)\n\n# Get the position and size of the sofa\nsofa_position, _ = get_position('sofa')\nsofa_size = get_size('sofa')\n\n# Calculate the target position for the robot to climb onto the sofa\ntarget_robot_position = [sofa_position[0], sofa_position[1], sofa_size[2]+robot_size[2]/2]\n\n# Climb onto the sofa\nclimb_to_position(target_robot_position)",
  file_path: robotBoxCode,
  task_name: "Sofa Climbing",
};

const legRobot_surfboard = {
  video_url: "https://www.youtube.com/embed/BrY1QIKOVo0?si=dr1NrGhaAE-KO-rZ",
  // code: "import numpy as np\n\n# Get the positions and sizes of the objects\nsofa_1_position, _ = get_position('sofa_1')\nsofa_2_position, _ = get_position('sofa_2')\nsofa_2_size = get_size('sofa_2')\nrobot_size = get_size('robot')\n\n# Calculate the target position for the surfboard\nsurfboard_target_position = [(sofa_1_position[0] + sofa_2_position[0]) / 2, sofa_1_position[1], sofa_1_position[2]]\n\n# Push the surfboard to the target position\npush_to_position('surfboard', surfboard_target_position)\n\n# Calculate the target position for the robot\nrobot_target_position = [sofa_2_position[0], sofa_2_position[1], sofa_2_size[2] + robot_size[2] / 2]\n\n# Walk to the target position\nwalk_to_position(robot_target_position)",
  file_path: robotSurfboardCode,
  task_name: "Sofa Traversing",
};

const legRobot_lever = {
  video_url: "https://www.youtube.com/embed/W-T5WBzC3MA?si=x_N2K_PHcia8EeJu",
  // code: "import numpy as np\n\n# Get the current position of the chair\nchair_position, chair_orientation = get_position('chair')\n\n# Calculate the target position for the chair\ntarget_chair_position = np.array([chair_position[0]-1, chair_position[1], chair_position[2]])\n\n# Push the chair to the target position\npush_to_position('chair', target_chair_position)\n\n# Get the current position and size of the surfboard\nsurfboard_position, surfboard_orientation = get_position('surfboard')\nsurfboard_size = get_size('surfboard')\n\n# Get the size of the robot\nrobot_size = get_size('robot')\n\n# Calculate the target position for the robot to walk onto the surfboard\ntarget_robot_position = np.array([surfboard_position[0], surfboard_position[1], surfboard_size[2]+robot_size[2]/2])\n\n# Walk to the target position on the surfboard\nwalk_to_position(target_robot_position)",
  file_path: robotLeverCode,
  task_name: "Cube Lifting",
};

const arm_scroll = {
  video_url: "https://www.youtube.com/embed/MAc2-CUL1F4?si=nL3rx73hk77K-Z7G",
  // code: "import numpy as np\n\n# Get the stick's position\nstick_position = get_position('stick')\n\n# Get the stick's size\nstick_size = get_size('stick')\n\n# Move the gripper close to the stick before grasping it\nmove_to_position(stick_position + np.array([0.0, 0.0, stick_size[2]/2 - 0.03]))\n\n# Grasp the stick\nclose_gripper()\n\n# Get the can's position\ncan_position = get_position('can')\n\n# Move the grasped stick to make contact with the can\nmove_to_position(can_position - np.array([stick_size[2]/2, 0.0, 0.0]))\n\n# Push the can closer to the strip of paper along the y-axis\nmove_to_position(stick_position + np.array([0.0, 0.23, 0.0]))\n\n# Release the stick\nopen_gripper()\n\n# Get the strip of paper's position\npaper_position = get_position('strip of paper')\n\n# Get the paper's size\npaper_size = get_size('strip of paper')\n\n# Move the gripper close to the strip of paper before grasping it\nmove_to_position(paper_position + np.array([0.0, 0.0, paper_size[2]/2 - 0.03]))\n\n# Grasp the strip of paper\nclose_gripper()\n\n# Drag the strip of paper in the negative x direction\nmove_to_position(np.array([0.0, paper_position[1], paper_position[2]]))\n\n# Release the strip of paper\nopen_gripper()\n\n# Get the can's position\ncan_position = get_position('can')\n\n# Get the can's size\ncan_size = get_size('can')\n\n# Move the gripper close to the can before grasping it\nmove_to_position(can_position + np.array([0.0, 0.0, can_size[2]/2 - 0.03]))\n\n# Grasp the can\nclose_gripper()",
  file_path: armScrollCode,
  task_name: "Can Grabbing",
};

const arm_hammer = {
  video_url: "https://www.youtube.com/embed/3NEAVVOVCLs?si=HJbHlkRPaUHA8zVM",
  // code: "import numpy as np\n\n# Get the position of the hammer\nhammer_position = get_position('hammer')\n\n# Move the gripper to the hammer's position\ntarget_position = hammer_position + np.array([0.0, 0.0, get_size('hammer')[2]/2 - 0.03])\nmove_to_position(target_position)\n\n# Close the gripper to grasp the hammer\nclose_gripper()\n\n# Get the updated position of the milk\nmilk_position = get_position('milk')\n\n# Calculate the direction from the hammer to the milk\ndirection = (milk_position - hammer_position) / np.linalg.norm(milk_position - hammer_position)\n\n# Move the grasped hammer to make contact with the milk\ntarget_position = milk_position - 0.5 * get_size('hammer')[0] * direction\nmove_to_position(target_position)\n\n# Push the milk into the workspace\ntarget_position = [0.0, 0.0, milk_position[2]]\nmove_to_position(target_position)\n\n# Release the hammer\nopen_gripper()\n\n# Get the updated position of the milk\nmilk_position = get_position('milk')\n\n# Move the gripper to the milk's position\ntarget_position = milk_position + np.array([0.0, 0.0, get_size('milk')[2]/2 - 0.03])\nmove_to_position(target_position)\n\n# Close the gripper to grasp the milk\nclose_gripper()",
  file_path: armHammerCode,
  task_name: "Milk Reaching",
};

const arm_magnet = {
  video_url: "https://www.youtube.com/embed/BLnzJf45Vpw?si=Ij-MMYL9MeVH4s0M",
  // code: "import numpy as np\n\n# Get the position of magnetic_cube1\nmagnetic_cube1_position = get_position('magnetic_cube1')\n\n# Get the size of magnetic_cube1\nmagnetic_cube1_size = get_size('magnetic_cube1')\n\n# Move the gripper to the magnetic_cube1's position\nmove_to_position(magnetic_cube1_position + np.array([0.0, 0.0, magnetic_cube1_size[2]/2 - 0.03]))\n\n# Close the gripper to grasp the magnetic_cube1\nclose_gripper()\n\n# Get the position of magnetic_cube2\nmagnetic_cube2_position = get_position('magnetic_cube2')\n\n# Move the magnetic_cube1 to make contact with the magnetic_cube2\nmove_to_position(magnetic_cube2_position - np.array([magnetic_cube1_size[0]/2, 0.0, 0.0]))\n\n# Get the position of magnetic_cube3\nmagnetic_cube3_position = get_position('magnetic_cube3')\n\n# Move the attached cubes to make contact with the magnetic_cube3\nmove_to_position(magnetic_cube3_position - np.array([magnetic_cube1_size[0], 0.0, 0.0]))\n\n# Get the position of the button\nbutton_position = get_position('button')\n\n# Move the attached cubes to press the button\nmove_to_position(button_position + np.array([magnetic_cube1_size[0], 0.0, 0.0]))",
  file_path: armMagnetCode,
  task_name: "Button Pressing",
};

const DEMO_CODES = {
  //   legRobot_box: legRobot_box,
  //   legRobot_surfboard: legRobot_surfboard,
  //   legRobot_chair: legRobot_chair,
  sequential: [arm_scroll, legRobot_box],
  selection: [arm_hammer, legRobot_surfboard],
  manufacture: [arm_magnet, legRobot_lever],
};

export default DEMO_CODES;
