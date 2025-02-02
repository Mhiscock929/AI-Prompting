import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "framer-motion";

export default function Home() {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const steps = [
    {
      title: "Welcome to Prompt Engineering Tutor!",
      task: "Imagine you're planning a vacation and need destination suggestions. What would you ask ChatGPT?",
      hint: "Include factors like budget, season, or interests to get better results."
    },
    {
      title: "Crafting Specific Prompts",
      task: "Ask ChatGPT to create a 30-minute workout for beginners focusing on strength training.",
      hint: "Think about including details like target muscle groups and available equipment."
    },
    {
      title: "Role-based Prompts",
      task: "Ask ChatGPT to act as a Marketing Manager and give advice on increasing social media engagement.",
      hint: "Use phrases like 'Pretend you're...' or 'Act as...' to guide ChatGPT."
    },
    {
      title: "Iterative Refinement",
      task: "Generate a list of creative content ideas, then refine it by asking ChatGPT to focus on videos only.",
      hint: "Try giving additional instructions to narrow down the scope."
    }
  ];

  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
      setUserInput("");
      setFeedback("");
    } else {
      setFeedback("Congratulations! You've completed the tutor session.");
    }
  };

  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleCheckResponse = () => {
    if (userInput.trim() === "") {
      setFeedback("Please enter a response before proceeding.");
      return;
    }

    switch (step) {
      case 0:
        if (userInput.toLowerCase().includes("budget") || userInput.toLowerCase().includes("season")) {
          setFeedback("Great job! You included key factors to help refine the AI's suggestions.");
        } else {
          setFeedback("Try mentioning factors like budget or season to make the prompt more effective.");
        }
        break;
      case 1:
        if (userInput.toLowerCase().includes("30-minute") && userInput.toLowerCase().includes("strength")) {
          setFeedback("Nice! You've created a clear and actionable prompt.");
        } else {
          setFeedback("Make sure to specify the workout duration and focus area.");
        }
        break;
      case 2:
        if (userInput.toLowerCase().includes("marketing manager")) {
          setFeedback("Well done! Role-based prompts can lead to more insightful answers.");
        } else {
          setFeedback("Remember to assign a specific role like 'Marketing Manager' to ChatGPT.");
        }
        break;
      case 3:
        if (userInput.toLowerCase().includes("videos")) {
          setFeedback("Excellent! You've refined your request to focus on a specific content type.");
        } else {
          setFeedback("Try narrowing down your prompt to focus only on videos.");
        }
        break;
      default:
        setFeedback("Great effort!");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-4">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">{steps[step].title}</h2>
            <p className="mb-2">{steps[step].task}</p>
            <p className="text-sm text-gray-500">Hint: {steps[step].hint}</p>
          </CardContent>
        </Card>

        <Input
          type="text"
          placeholder="Type your response here..."
          value={userInput}
          onChange={handleInputChange}
          className="mb-4"
        />

        {feedback && <p className="mb-4 text-blue-600">{feedback}</p>}

        <div className="flex space-x-2">
          <Button onClick={handleCheckResponse}>Check Response</Button>
          <Button variant="outline" onClick={handleNextStep} disabled={step >= steps.length - 1}>
            {step < steps.length - 1 ? "Next Step" : "Finish"}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
