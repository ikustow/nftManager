import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tact',
    target: 'contracts/n_f_t_child.tact',
    options: {
        debug: true,
    },
};
