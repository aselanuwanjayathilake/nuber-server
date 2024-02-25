import { SayHelloQueryArgs, SayHelloResponse } from "src/types/graph";

const resolvers = {
    Query: {
        sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
            return {
                error: false,
                text: `how are you ${args.name}`
            }
        }
    }
}

export default resolvers;