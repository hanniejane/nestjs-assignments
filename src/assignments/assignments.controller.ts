import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('fibonacci/:n')
  getFibonacciSequence(@Param('n') n: string): { sequence: number[] } {
    const num = parseInt(n, 10);

    // Validate that 'n' is a positive integer
    if (isNaN(num) || num < 1) {
      throw new Error('Invalid input: n must be a positive integer');
    }

    // Generate Fibonacci sequence up to 'n' terms
    const sequence = this.calculateFibonacci(num);

    // Return the sequence as a response
    return { sequence };
  }

  private calculateFibonacci(n: number): number[] {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }
}
