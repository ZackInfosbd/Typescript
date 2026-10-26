interface Button {
  render(): string;
}

interface Checkbox {
  render(): string;
}

interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

class LightButton implements Button {
  render(): string {
    return "Light button";
  }
}

class LightCheckbox implements Checkbox {
  render(): string {
    return "Light checkbox";
  }
}

class DarkButton implements Button {
  render(): string {
    return "Dark button";
  }
}

class DarkCheckbox implements Checkbox {
  render(): string {
    return "Dark checkbox";
  }
}

class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}

class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}

function renderApplication(factory: UIFactory): void {
  console.log(factory.createButton().render());
  console.log(factory.createCheckbox().render());
}

// Swap the factory to change the whole product family without changing the client.
renderApplication(new LightThemeFactory());
renderApplication(new DarkThemeFactory());
